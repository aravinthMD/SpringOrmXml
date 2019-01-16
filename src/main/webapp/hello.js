var app = new function () {
    this.saveorupdate = function () {

        alert("welcome to save");

        var countryid = $("#countryid").val();

        var countryname = $('#countryname').val();

        $.ajax({

            url: '/',
            type: 'GET',
            data: { "countryid": countryid, "countryname": countryname },

            success: function (data) {

                $('#countryid').val(data);
                alert(data);
            }

        });
        this.FetchAll();
    }}

