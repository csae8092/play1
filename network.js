Highcharts.addEvent(
    Highcharts.Series,
    'afterSetOptions',
    function (e) {
        var colors = Highcharts.getOptions().colors,
            i = 0,
            nodes = {};
        if (
            this instanceof Highcharts.Series.types.networkgraph &&
            e.options.id === 'Auden_W_H'
        ) {
            e.options.data.forEach(function (link) {

                if (link[0] === 'Auden_W_H') {
                    nodes['Auden_W_H'] = {
                        id: 'Auden_W_H',
                        marker: {
                            radius: 35
                        }
                    };
                    nodes[link[1]] = {
                        id: link[1],
                        marker: {
                            radius: 18
                        },
                        color: colors[i++]
                    };
                } else if (nodes[link[0]] && nodes[link[0]].color) {
                    nodes[link[1]] = {
                        id: link[1],
                        color: nodes[link[0]].color
                    };
                }
            });

            e.options.nodes = Object.keys(nodes).map(function (id) {
                return nodes[id];
            });
        }
    }
);

Highcharts.chart('container', {
    chart: {
        type: 'networkgraph',
        marginTop: 80
    },
    title: {
        text: 'Events in Auden Musulin Papers'
    },
    subtitle: {
        text: 'Personal, professional and historic events mentioned in the documents'
    },
    plotOptions: {
        networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
                enableSimulation: true,
                integration: 'verlet',
                linkLength: 150,
                linkColor: 'red'
            }
        }
    },
    series: [{
        link: {
            width: 2
        },
        dataLabels: {
            enabled: true
        },
        data: [{
            from: 'Eiermann_Emma',
            to: 'Death_of_Eiermann'
        }, {
            from: 'Auden_W_H',
            to: 'Death_of_Eiermann',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Auden_W_H',
            to: 'Death_of_Yannis_Boras',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Musulin_Stella',
            to: 'Death_of_Yannis_Boras',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Kallman_Chester',
            to: 'Death_of_Yannis_Boras',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Boras_Yannis',
            to: 'Death_of_Yannis_Boras'
        }, {
            from: 'Auden_W_H',
            to: 'W_H_Auden_Gedichte_Poems'
        }, {
            from: 'Auden_W_H',
            to: '1966_NYC_transit_strike',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Auden_W_H',
            to: 'Black_Out',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Auden_W_H',
            to: '1967_TS_Eliot_Memorial_Lectures'
        }, {
            from: 'Musulin_Stella',
            to: '1967_TS_Eliot_Memorial_Lectures',
            color: 'pink',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Musulin_Stella',
            to: 'Royal_Visit',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Auden_W_H',
            to: 'Royal_Visit',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Elizabeth_I_Great_Britain_Queen_Mother',
            to: 'Royal_Visit'
        }, {
            from: 'Elizabeth_II_Great_Britain_Queen',
            to: 'Royal_Visit'
        }, {
            from: 'Anne_Great_Britain_Princess',
            to: 'Royal_Visit'
        }, {
            from: 'Musulin_Stella',
            to: 'Biedermayer_period',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Auden_W_H',
            to: 'Biedermayer_period',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Auden_W_H',
            to: 'The_Martyr_as_Dramatic_Hero'
        }, {
            from: 'Auden_W_H',
            to: 'Interview_of_Strobls'
        }, {
            from: 'Strobl_NA',
            to: 'Interview_of_Strobls'
        }, {
            from: 'Auden_W_H',
            to: 'Left_American_driving_license'
        }, {
            from: 'Strobl_Josefa',
            to: 'Interview_of_Strobls'
        }, {
            from: 'Musulin_Stella',
            to: 'Left_American_driving_license'
        }, {
            from: 'Musulin_Stella',
            to: 'Hosting_of_Czech_Couple'
        }, {
            from: 'Auden_W_H',
            to: 'Hosting_of_Czech_Couple'
        }, {
            from: 'Langers_Mr',
            to: 'Hosting_of_Czech_Couple'
        }, {
            from: 'Langers_Mrs',
            to: 'Hosting_of_Czech_Couple'
        }, {
            from: 'Auden_W_H',
            to: 'Car_accident_of_Yannis_Boras'
        }, {
            from: 'Kallman_Chester',
            to: 'Car_accident_of_Yannis_Boras'
        }, {
            from: 'Boras_Yannis',
            to: 'Car_accident_of_Yannis_Boras'
        }, {
            from: 'Kallman_Chester',
            to: 'Wedding_near_Krems'
        }, {
            from: 'Auden_W_H',
            to: 'Wedding_near_Krems'
        }, {
            from: 'Auden_W_H',
            to: 'Reading_of_Audens_poems'
        }, {
            from: 'Musulin_Stella',
            to: 'Reading_of_Audens_poems',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Auden_W_H',
            to: 'Arrival_of_Christiane_Zimmer'
        }, {
            from: 'Musulin_Stella',
            to: 'Arrival_of_Christiane_Zimmer'
        }, {
            from: 'Zimmer_Christiane',
            to: 'Arrival_of_Christiane_Zimmer'
        }, {
            from: 'Musulin_Stella',
            to: 'Dinner_with_the_Priest'
        }, {
            from: 'Auden_W_H',
            to: 'Dinner_with_the_Priest'
        }, {
            from: 'Kallman_Chester',
            to: 'Dinner_with_the_Priest'
        }, {
            from: 'NA3_Father_Lustkandl',
            to: 'Dinner_with_the_Priest'
        }, {
            from: 'Auden_W_H',
            to: 'Death_of_Auden'
        }, {
            from: 'Auden_W_H',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Musulin_Stella',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Kallman_Chester',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Spender_Stephen',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Enzinger_Josef',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Opel_Adolf',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Auden_John',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Luke_David',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Orwel_lSonia',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Clark_Tekla',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Seitz_Maria',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Duncan_Bruce',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Clark_Lisa',
            to: 'Funeral_of_Auden'
        }, {
            from: 'person_whose_name_we_never_mention',
            to: 'Funeral_of_Auden'
        }, {
            from: 'Auden_W_H',
            to: 'Auden_Exhibition',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Musulin_Stella',
            to: 'Auden_Exhibition'
        }, {
            from: 'O_Sullivan_Michael',
            to: 'Auden_Exhibition'
        }, {
            from: 'Musulin_Stella',
            to: 'Meeting_with_Friedrich_Heer'
        }, {
            from: 'Auden_W_H',
            to: 'Meeting_with_Friedrich_Heer'
        }, {
            from: 'Friedrich_Heer',
            to: 'Meeting_with_Friedrich_Heer'
        }, {
            from: 'Musulin_Stella',
            to: 'Lecture_about_W_H_Auden_und_Oesterreicher_WH_Auden_and_the_Austrians'
        }, {
            from: 'Kraus_Wolfgang',
            to: 'Lecture_about_W_H_Auden_und_Oesterreicher_WH_Auden_and_the_Austrians'
        }, {
            from: 'Auden_W_H',
            to: 'Lecture_about_W_H_Auden_und_Oesterreicher_WH_Auden_and_the_Austrians',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Musulin_Stella',
            to: 'Divorce_of_Stella_Musulin'
        }, {
            from: 'Musulin_Janko',
            to: 'Divorce_of_Stella_Musulin'
        }, {
            from: 'Musulin_Marko',
            to: 'Divorce_of_Stella_Musulin'
        }, {
            from: 'Musulin_Elsa_von_Isbary',
            to: 'Divorce_of_Stella_Musulin'
        }, {
            from: 'Auden_W_H',
            to: 'Reading_of_Hier_und_Jetzt'
        }, {
            from: 'Auden_W_H',
            to: 'Attendance_in_PEN_Conference'
        }, {
            from: 'Auden_W_H',
            to: 'Audens_DUI'
        }, {
            from: 'Auden_W_H',
            to: 'Guest_Professor_at_Ford_Foundation'
        }, {
            from: 'Auden_W_H',
            to: 'Talk_on_TS_Eliot_in_Vienna'
        }, {
            from: 'Auden_W_H',
            to: 'Talk_on_TS_Eliot_in_Westminster_Abbey'
        }, {
            from: 'Auden_W_H',
            to: 'Literary_congress_on_avant_garde'
        }, {
            from: 'Musulin_Stella',
            to: 'Literary_congress_on_avant_garde', color: 'pink',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Kallman_Chester',
            to: 'Literary_congress_on_avant_garde', color: 'brown',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'McCarthy_Mary',
            to: 'Literary_congress_on_avant_garde'
        }, {
            from: 'Bondy_Francis',
            to: 'Literary_congress_on_avant_garde'
        }, {
            from: 'Etkin_Yefrim_of_Leningrad',
            to: 'Literary_congress_on_avant_garde'
        }, {
            from: 'Reich_Ranicki_Marcel',
            to: 'Literary_congress_on_avant_garde'
        }, {
            from: 'Toynbee_Philipp',
            to: 'Literary_congress_on_avant_garde'
        }, {
            from: 'the_square_headed_commissar_type_from_Moscow',
            to: 'Literary_congress_on_avant_garde'
        }, {
            from: 'Auden_W_H',
            to: 'Interview_in_Sunday_Telegraph_On_drugs_and_drivel'
        }, {
            from: 'Auden_W_H',
            to: 'Auden_car_accident_in_Kirchstetten'
        }, {
            from: 'Musulin_Stella',
            to: 'Auden_car_accident_in_Kirchstetten'
        }, {
            from: 'Auden_W_H',
            to: 'Audens_arrival_in_Kirchstetten'
        }, {
            from: 'Auden_W_H',
            to: 'Imprisonment_of_Hugie'
        }, {
            from: 'Musulin_Stella',
            to: 'Imprisonment_of_Hugie',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'NA1_Hugie',
            to: 'Imprisonment_of_Hugie'
        }, {
            from: 'Auden_W_H',
            to: 'Audens_speech_in_Neulengbach'
        }, {
            from: 'Musulin_Stella',
            to: 'Audens_speech_in_Neulengbach',
            color: 'pink',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Maurer_Andreas',
            to: 'Audens_speech_in_Neulengbach'
        }, {
            from: 'Auden_W_H',
            to: 'Audens_car_accident_in_Kirchstetten'
        }, {
            from: 'Musulin_Stella',
            to: 'Audens_car_accident_in_Kirchstetten'
        }, {
            from: 'Auden_W_H',
            to: 'Party_at_Chesters'
        }, {
            from: 'Musulin_Stella',
            to: 'Party_at_Chesters'
        }, {
            from: 'Kallman_Chester',
            to: 'Party_at_Chesters'
        }, {
            from: 'person_whose_name_we_never_mention',
            to: 'Party_at_Chesters'
        }, {
            from: 'Auden_W_H',
            to: 'Audens_last_planned_reading_at_the_Austrian_Society_for_Literature'
        }, {
            from: 'Auden_W_H',
            to: 'Mourn_Audens_body_Funeral_process',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Kallman_Chester',
            to: 'Mourn_Audens_body_Funeral_process'
        }, {
            from: 'Musulin_Stella',
            to: 'Mourn_Audens_body_Funeral_process'
        }, {
            from: 'Enzinger_Josef',
            to: 'Mourn_Audens_body_Funeral_process'
        }, {
            from: 'Strobl_Josefa',
            to: 'Mourn_Audens_body_Funeral_process'
        }, {
            from: 'Opel_Adolf',
            to: 'Mourn_Audens_body_Funeral_process'
        }, {
            from: 'Musulin_Stella',
            to: 'Mourn_Audens_body_Funeral_process'
        }, {
            from: 'Clark_Tekla',
            to: 'Mourn_Audens_body_Funeral_process'
        }, {
            from: 'Clark_Lisa',
            to: 'Mourn_Audens_body_Funeral_process'
        }, {
            from: 'Seitz_Maria',
            to: 'Mourn_Audens_body_Funeral_process'
        }, {
            from: 'Kallman_Chester',
            to: 'First_encounter_of_Auden_and_Kallman'
        }, {
            from: 'Auden_W_H',
            to: 'First_encounter_of_Auden_and_Kallman'
        }, {
            from: 'Auden_W_H',
            to: 'Problems_in_Czechoslovakia',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Musulin_Stella',
            to: 'Problems_in_Czechoslovakia',
            color: 'red',
            width: 4,
            dashStyle: 'dot'
        }, {
            from: 'Langers_Mr',
            to: 'Problems_in_Czechoslovakia'
        }, {
            from: 'Langers_Mrs',
            to: 'Problems_in_Czechoslovakia'
        }],
        nodes: [{
            id: 'Death_of_Eiermann',
            color: 'orange'
        }, {
            id: 'Death_of_Yannis_Boras',
            color: 'orange'
        }, {
            id: 'W_H_Auden_Gedichte_Poems',
            color: 'green'
        }, {
            id: '1966_NYC_transit_strike',
            color: 'purple'
        }, {
            id: '1967_TS_Eliot_Memorial_Lectures',
            color: 'green'
        }, {
            id: 'Black_Out',
            color: 'purple'
        }, {
            id: 'Royal_Visit',
            color: 'purple'
        }, {
            id: 'Biedermayer_period',
            color: 'purple'
        }, {
            id: 'The_Martyr_as_Dramatic_Hero',
            color: 'green'
        }, {
            id: 'Interview_of_Strobls',
            color: 'orange'
        }, {
            id: 'Left_American_driving_license',
            color: 'orange'
        }, {
            id: 'Hosting_of_Czech_Couple',
            color: 'orange'
        }, {
            id: 'Car_accident_of_Yannis_Boras',
            color: 'orange'
        }, {
            id: 'Wedding_near_Krems',
            color: 'orange'
        }, {
            id: 'Reading_of_Audens_poems',
            color: 'green'
        }, {
            id: 'Arrival_of_Christiane_Zimmer',
            color: 'orange'
        }, {
            id: 'Dinner_with_the_Priest',
            color: 'orange',
        }, {
            id: 'Death_of_Auden',
            color: 'orange',
        }, {
            id: 'Funeral_of_Auden',
            color: 'orange',
        }, {
            id: 'Auden_Exhibition',
            color: 'green'
        }, {
            id: 'Meeting_with_Friedrich_Heer',
            color: 'orange',
        }, {
            id: 'Lecture_about_W_H_Auden_und_Oesterreicher_WH_Auden_and_the_Austrians',
            color: 'green'
        }, {
            id: 'Divorce_of_Stella_Musulin',
            color: 'orange',
        }, {
            id: 'Reading_of_Hier_und_Jetzt',
            color: 'green'
        }, {
            id: 'Attendance_in_PEN_Conference',
            color: 'green'
        }, {
            id: 'Guest_Professor_at_Ford_Foundation',
            color: 'green'
        }, {
            id: 'Audens_DUI',
            color: 'orange'
        }, {
            id: 'Talk_on_TS_Eliot_in_Vienna',
            color: 'green'
        }, {
            id: 'Talk_on_TS_Eliot_in_Westminster_Abbey',
            color: 'green'
        }, {
            id: 'Literary_congress_on_avant_garde',
            color: 'green'
        }, {
            id: 'Interview_in_Sunday_Telegraph_On_drugs_and_drivel',
            color: 'green'
        }, {
            id: 'Auden_car_accident_in_Kirchstetten',
            color: 'orange'
        }, {
            id: 'Audens_arrival_in_Kirchstetten',
            color: 'orange'
        }, {
            id: 'Imprisonment_of_Hugie',
            color: 'orange'
        }, {
            id: 'Audens_speech_in_Neulengbach',
            color: 'green'
        }, {
            id: 'Audens_car_accident_in_Kirchstetten',
            color: 'orange'
        }, {
            id: 'Party_at_Chesters',
            color: 'orange'
        }, {
            id: 'Audens_last_planned_reading_at_the_Austrian_Society_for_Literature',
            color: 'green'
        }, {
            id: 'Mourn_Audens_body_Funeral_process',
            color: 'orange'
        }, {
            id: 'First_encounter_of_Auden_and_Kallman',
            color: 'orange'
        }, {
            id: 'Problems_in_Czechoslovakia',
            color: 'green'
        }]
    }]

});