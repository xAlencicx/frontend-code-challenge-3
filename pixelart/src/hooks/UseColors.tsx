function useColors(){

    //initialize new filltool which will handle the fill tool logic such as bucket fill, finding neighboring tiles
        const WHITE = "white";
        const colors = [
            'red',
            'yellow',
            'green',
            'blue',
            'indigo',
            'purple',
            'pink',
            'white',
            'black'
          ];

        return {
            WHITE,
            colors
        }
    }
    
    export default useColors;