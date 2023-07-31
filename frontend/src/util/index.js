import { useToast } from "vue-toastification";
import VueSweetalert2 from 'vue-sweetalert2';
import dayjs from 'dayjs'
dayjs.locale('pt-br');

const toast = useToast()
const Swal = new VueSweetalert2

function validate(id) {

    var form = document.getElementById(id)

    if (!form.checkValidity()) {
        form.classList.add('was-validated')
        toastAlert({ status: 'error', message: 'Verifique os campos obrigatórios!' })
        return false
    }

    return true
}

function toastAlert(result = []) {
    switch (result.status) {
        case 'success':
            toast.success(result.message);
            break;
        case 'error':
            toast.error(result.message);
            break;

        default:
            toast.error('Ocorreu algum erro!');
            break;
    }
}


function slug(text) {
    slug = text.normalize("NFD").replace(/[\u0300-\u036f]/gi, "");

    if (slug.search(/[^a-z0-9]/i) != -1) {
        slug = slug.replace(/[^a-z0-9]/gi, "-");
    }
    if (slug.search(/\s/g) != -1) {
        slug = slug.replace(/\s/g, "-");
    }

    return slug.toLowerCase();
}

function float2moeda(num) {

    var x = 0;

    if (num < 0) {
        num = Math.abs(num);
        x = 1;
    }
    if (isNaN(num)) num = "0";
    var cents = Math.floor((num * 100 + 0.5) % 100);

    num = Math.floor((num * 100 + 0.5) / 100).toString();

    if (cents < 10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + '.'
            + num.substring(num.length - (4 * i + 3));
    var ret = num + ',' + cents;
    if (x == 1) ret = ' - ' + ret; return ret;

}

function date(date = 'now', format = "YYYY-MM-DD HH:mm:ss") {
    if (date) {
        if (date == 'now') { return dayjs().format(format) }
        return dayjs(date).format(format)
    }
    return null
}


function deleteByIndex(item, i) {
    item.splice(i, 1);
}

function deleteById(data, id) {
    const objWithIdIndex = data.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
        data.splice(objWithIdIndex, 1);
    }
}

export default {
    money: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: true
    },
    validate: validate,
    toast: toastAlert,
    slug: slug,
    float2moeda: float2moeda,
    date: date,
    dayjs: dayjs,
    deleteByIndex: deleteByIndex,
    deleteById: deleteById,
}