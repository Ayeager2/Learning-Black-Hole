$(function () {
    $('#type-ahead').typeahead(
        {
            name: 'football-teams-cached2',
            prefetch: {
                url: 'Json/teams.json',
                ttl: 0
            }
        }
    );

});