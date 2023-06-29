$(document).ready(function() {
    // Add new row on button click
    $('#add-row').click(function() {
      var newRow = '<tr>' +
        '<td><input type="text" class="form-control" name="item[]"></td>' +
        '<td><input type="number" class="form-control" name="amount[]"></td>' +
        '</tr>';
      $('#expenditure-table tbody').append(newRow);
    });
  });
  