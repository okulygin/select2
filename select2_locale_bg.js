/**
 * Select2 <Language> translation.
 * 
 * Author: Lubomir Vikev <lubomirvikev@gmail.com>
 */
(function ($) {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches: function () { return "���� �������� ����������"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "���� �������� ��� " + n + " ������" + (n == 1 ? "" : "�"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "���� �������� � " + n + " ��-����� ������" + (n == 1? "" : "�"); },
        formatSelectionTooBig: function (limit) { return "������ �� ��������� " + limit + (limit == 1 ? "�����" : "������"); },
        formatLoadMore: function (pageNumber) { return "��������� �� ��� ������..."; },
        formatSearching: function () { return "�������..."; }
    });
})(jQuery);
