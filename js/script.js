function element(id)
{
    return document.getElementById(id);
}

function checkForm()
{
    var fields = ['name', 'email', 'message'];

    for(var i = 0; i < fields.length; i++)
    {
        var field_id = 'f_' + fields[i];
        var field_name = fields[i].charAt(0).toUpperCase() + fields[i].substr(1);

        if(element(field_id).value == '')
        {
            alert(field_name + ' cannot be empty!');
            element(field_id).focus();
            return false;
        }
    }

    return true;
}
