<template>
    <div class="overflow-x-auto">
        <label class="fw-bold">Imagens</label>
        <div class="d-flex">
            <div
                class="preview d-flex justify-content-center align-items-center overflow-hidden m-2 shadow-sm position-relative">
                <input type="file" ref="fileInput" multiple @change="handleFileChange" id="fileInput" accept="image/*" />
                <font-awesome-icon icon="plus-circle" style="font-size: 40px;" />
            </div>


            <div v-for="(image, index) in _images" :key="index"
                class="preview d-flex justify-content-center align-items-center overflow-hidden m-2 shadow-sm position-relative">
                <font-awesome-icon icon="trash" class="me-1 destroy text-danger"
                    @click="$util.deleteById(_images, image.id)" style="font-size: 20px;" />
                <input name="file_name[]" type="hidden" v-model="image.src.name">
                <img class="img-fluid" :src="image.src.full_src" :alt="image.src.full_src" />

            </div>

            <div v-for="(file, index) in previewFiles" :key="file.name"
                class="preview overflow-hidden m-2 shadow-sm position-relative">
                <div v-if="file.show_progress" class="progress">
                    <div class="progress-bar" role="progressbar" :style="'width: ' + file.progress + '%'" aria-valuenow="0"
                        aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <div v-if="file.status != null" class="messages">
                    <div v-if="file.status" class="d-flex align-items-center text-success bg-light rounded rounded-lg p-1">
                        <font-awesome-icon icon="check-circle" class="me-1" style="font-size: 20px;" />
                        <small>Sucesso!</small>
                    </div>
                    <div v-else class="d-flex align-items-center text-danger bg-light rounded rounded-lg p-1">
                        <font-awesome-icon icon="times-circle" class="me-1" style="font-size: 20px;" />
                        <small>
                            Erro!
                            <span class="small"></span>
                        </small>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center img position-relative">
                    <font-awesome-icon icon="trash" class="me-1 destroy text-danger"
                        @click="$util.deleteByIndex(previewFiles, index)" style="font-size: 20px;" />
                    <img class="img-fluid" :src="file.preview" :alt="file.name" />
                </div>
                <input name="file_name[]" type="hidden" v-model="file.file_name">

            </div>
        </div>
    </div>
</template>
  
<script>
import pica from 'pica';

export default {
    data() {
        return {
            previewFiles: [],
            _images: {}
        };
    },
    props: {
        images: {},
    },
    methods: {
        async handleFileChange(event) {
            const files = event.target.files;
            const resizedImages = await this.resizeImages(files);
            for (let i = 0; i < resizedImages.length; i++) {
                const file = resizedImages[i];
                const preview = URL.createObjectURL(file);
                this.previewFiles.push({ file, name: file.name, preview, progress: 0, show_progress: false, finished: false, src: '', status: null });
            }

            this.uploadFiles();
        },
        // Redimeniciona a imagem antes de enviar, isso tonar o upload mais leve
        async resizeImages(files) {
            const picaInstance = pica();
            const resizedImages = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const img = await this.loadImage(file);
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800;

                let width = img.width;
                let height = img.height;

                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const resizedFile = await this.canvasToBlob(canvas, file.type);
                resizedImages.push(resizedFile);
            }

            return resizedImages;
        },

        loadImage(file) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = URL.createObjectURL(file);
            });
        },

        canvasToBlob(canvas, type) {
            return new Promise((resolve) => {
                canvas.toBlob((blob) => resolve(new File([blob], "resized_image.jpg", { type })));
            });
        },
        async uploadFiles() {
            const formData = new FormData();

            for (let i = 0; i < this.previewFiles.length; i++) {
                if (!this.previewFiles[i].finished) {
                    formData.append('files[]', this.previewFiles[i].file);
                    formData.append('index[]', i);
                    this.previewFiles[i].finished = true
                    this.previewFiles[i].show_progress = true
                }
            }

            try {
                await this.$http.post('/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: (progressEvent) => {
                        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        this.updateFileProgress(this.previewFiles, progress);
                    },
                }).then((response) => {
                    let data = response.data;

                    data.map((element) => {
                        console.log('Upload concluído:', element);
                        this.previewFiles[element.index].file_name = element.file_name
                        this.previewFiles[element.index].status = element.status
                        this.previewFiles[element.index].show_progress = false
                        this.previewFiles[element.index].error = element.error ?? null
                    });

                    this.$emit('response', this.previewFiles);

                });

                // 
            } catch (error) {
                // console.error('Erro durante o upload:', error);
            }
        },

        updateFileProgress(files, progress) {
            for (let i = 0; i < files.length; i++) {
                files[i].progress = progress;
            }
        },
    },
    watch: {
        images: function (newImages) {
            this._images = newImages;
        }
    },
};
</script>

<style scoped>
.preview,
.preview .img {
    height: 120px;
    width: 120px;
    min-width: 120px;
}

#fileInput {
    position: absolute;
    height: 500px;
    width: 500px;
}


.destroy,
.progress,
.messages {
    z-index: 10;
    position: absolute;
}

.progress,
.messages {
    top: 50px;
    left: 5px;
    right: 5px;
}

.messages {
    z-index: 1;
}

.destroy {
    cursor: pointer;
    right: 5px;
    margin: 3px;
    top: 0;
}
.overflow-x-auto{
    overflow-x: auto;
}
</style>
  