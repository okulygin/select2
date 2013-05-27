/**
 * Select2 <Language> translation.
 * 
 * Author: Your Name <your@email>
 */
(function ($) {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches: function () { return "��� �������� ������������"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "����������� �������� " + n + " ������������� ����������" + (n == 1 ? "" : "s"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "����������� ��������� " + n + " ����������" + (n == 1 ? "" : "s"); },
        formatSelectionTooBig: function (limit) { return "�������� �� ��������� ���� " + limit + " �����������" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "������� ������������..."; },
        formatSearching: function () { return "���������..."; }
    });
})(jQuery);
