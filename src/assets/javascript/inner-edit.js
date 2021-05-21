$(function () {
  console.log('inner-edit');
  var editor = Wysiwyg.initialize(document.getElementById('pageContent'));
  if (editor) {
    // On cancel button:

    function fieldValues() {
      return $.map($('#pageContent,#helptext,#suites', document.f), function (e) {
        return $(e).val();
      });
    }

    var originalFieldValues = fieldValues();

    var performingSubmit = false;

    $(document.f).submit(function () {
      performingSubmit = true;
    });

    window.onbeforeunload = function () {
      if (performingSubmit) {
        return;
      }

      if (editor.activeEditor() === "wysiwyg") {
        editor.loadWikiText();
      } else {
        editor.codeMirrorEditor.save();
      }

      if (fieldValues().join('$$') !== originalFieldValues.join('$$')) {
        return "The page content has been changed.\nDo you really want to leave this page?";
      }
    };

    var rte = $(editor.frame);
    var wrappedElement = $(editor.codeMirrorEditor.getWrapperElement());
    $(window).resize(function () {
      var h = $('#save_buttons').position().top;
      rte.height(h - rte.position().top - 6);
      wrappedElement.height(h - wrappedElement.position().top - 6);
    }).resize();
  }

  /* Tags */
  $('#suites').tagsInput();

  document.f.pageContent.focus();

  Mousetrap.bind('ctrl+s', function (e) {
    performingSubmit = true;
    $(document.f).submit();
    return false;
  });
  Mousetrap.bind('esc', function (e) {
    window.location.href = "PlugIns.SshFixture.UserGuide.SetUp";
    return false;
  });

});
