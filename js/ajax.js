// 格式化表单数据
const serialize = function (form) {
    if (form) {
        var params = [];
        let i, len;

        if ($) {
            form && (form = form[0]);
        }

        for (i = 0, len = form.elements.length; i < len; i++) {
            let field = form.elements[i];
            if (field.name.length) {
                params.push(field.name + '=' + field.value)
            }
        }
        return params.join('&');
    }
}