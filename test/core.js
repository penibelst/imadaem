test('attribute selector', 1, function() {
  $(document).ready(function() {
    $('#qunit-fixture').append('<img data-imadaem>');
    equal(
        $('img[data-imadaem]').imadaem().length,
        1,
        'Attribute selector is matched');
  });
});
