import {Machine} from 'xstate';
const DFA = Machine({
    id:"DFA",
    initial: "0",
    states: {
        0: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"0",
                Subtitle:"0",
                Morning:"0",
                Afternoon:"0",
                Evening:"0",
                Seat:"0",
                "Add-on":"0",
                Confirm:"0",
            }
        }
        ,
        1: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"3",
                Subtitle:"1",
                Morning:"1",
                Afternoon:"1",
                Evening:"1",
                Seat:"1",
                "Add-on":"1",
                Confirm:"1",
            }
        }
        ,
        2: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"4",
                Subtitle:"5",
                Morning:"2",
                Afternoon:"2",
                Evening:"2",
                Seat:"2",
                "Add-on":"2",
                Confirm:"2",
            }
        }
        ,
        3: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"3",
                Subtitle:"3",
                Morning:"3",
                Afternoon:"6",
                Evening:"7",
                Seat:"3",
                "Add-on":"3",
                Confirm:"3",
            }
        }
        ,
        4: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"4",
                Subtitle:"5",
                Morning:"8",
                Afternoon:"4",
                Evening:"9",
                Seat:"4",
                "Add-on":"4",
                Confirm:"4",
            }
        }
        ,
        5: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"4",
                Subtitle:"5",
                Morning:"5",
                Afternoon:"10",
                Evening:"11",
                Seat:"5",
                "Add-on":"5",
                Confirm:"5",
            }
        }
        ,
        6: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"3",
                Subtitle:"6",
                Morning:"6",
                Afternoon:"6",
                Evening:"7",
                Seat:"12",
                "Add-on":"6",
                Confirm:"6",
            }
        }
        ,
        7: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"3",
                Subtitle:"7",
                Morning:"7",
                Afternoon:"6",
                Evening:"7",
                Seat:"12",
                "Add-on":"7",
                Confirm:"7",
            }
        }
        ,
        8: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"4",
                Subtitle:"5",
                Morning:"8",
                Afternoon:"8",
                Evening:"9",
                Seat:"13",
                "Add-on":"8",
                Confirm:"8",
            }
        }
        ,
        9: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"4",
                Subtitle:"5",
                Morning:"8",
                Afternoon:"9",
                Evening:"9",
                Seat:"13",
                "Add-on":"9",
                Confirm:"9",
            }
        }
        ,
        10: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"4",
                Subtitle:"5",
                Morning:"10",
                Afternoon:"10",
                Evening:"11",
                Seat:"14",
                "Add-on":"10",
                Confirm:"10",
            }
        }
        ,
        11: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"4",
                Subtitle:"5",
                Morning:"11",
                Afternoon:"10",
                Evening:"11",
                Seat:"14",
                "Add-on":"11",
                Confirm:"11",
            }
        }
        ,
        12: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"3",
                Subtitle:"12",
                Morning:"12",
                Afternoon:"6",
                Evening:"7",
                Seat:"12",
                "Add-on":"15",
                Confirm:"200",
            }
        }
        ,
        13: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"4",
                Subtitle:"5",
                Morning:"8",
                Afternoon:"13",
                Evening:"9",
                Seat:"13",
                "Add-on":"16",
                Confirm:"200",
            }
        }
        ,
        14: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"4",
                Subtitle:"5",
                Morning:"14",
                Afternoon:"10",
                Evening:"11",
                Seat:"14",
                "Add-on":"17",
                Confirm:"200",
            }
        }
        ,
        15: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"3",
                Subtitle:"15",
                Morning:"15",
                Afternoon:"6",
                Evening:"7",
                Seat:"12",
                "Add-on":"15",
                Confirm:"200",
            }
        }
        ,
        16: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"4",
                Subtitle:"5",
                Morning:"8",
                Afternoon:"16",
                Evening:"9",
                Seat:"13",
                "Add-on":"16",
                Confirm:"200",
            }
        }
        ,
        17: {
            on: {
                Thai: "1",
                Foreign:"2",
                "Thai dub":"4",
                Subtitle:"5",
                Morning:"17",
                Afternoon:"10",
                Evening:"11",
                Seat:"14",
                "Add-on":"17",
                Confirm:"200",
            }
        }
        ,
        200: {
            on: {
                Thai: "404",
                Foreign:"404",
                "Thai dub":"404",
                Subtitle:"404",
                Morning:"404",
                Afternoon:"404",
                Evening:"404",
                Seat:"404",
                "Add-on":"404",
                Confirm:"404",
              
            }
        }
        ,
        404: {
             on: {
                Thai: "404",
                Foreign:"404",
                "Thai dub":"404",
                Subtitle:"404",
                Morning:"404",
                Afternoon:"404",
                Evening:"404",
                Seat:"404",
                "Add-on":"404",
                Confirm:"404",
              
            }
        }
    }
});
export const transition = (currentState,alphabet,toggle) =>{
    const nextState = DFA.transition(currentState,alphabet).value;
    window.showPath(toggle,nextState);
    window.animateColorAndFraction(nextState);
    window.highlight(nextState);
    return nextState;
};