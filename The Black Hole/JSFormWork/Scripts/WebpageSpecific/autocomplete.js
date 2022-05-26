$(function () {
    $('#type-ahead').typeahead(
        {
            template: '<b>{{value}} - </b>Super Bowl Winner in {{year}}',
            engine:Hogan,
            // name: 'football-teams-cached2',
            // prefetch: {
            //     url: 'Json/teams.json',
            //     ttl: 0
            // }
            local: [
                {
                    value: "Giants",
                    year: 2012,
                    tokens: ["New York", "Giants"]
                },

                {
                    value: "Jets",
                    year: 1969,
                    tokens: ["New York", "Jets"]
                }
            ]

        });
});
            
