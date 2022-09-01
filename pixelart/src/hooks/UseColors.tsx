function useColors(){

    //initialize new filltool which will handle the fill tool logic such as bucket fill, finding neighboring tiles
        const WHITE = "white";
        const colors = [
            '#E9E51C',
            '#EAC41D',
            '#EBA21D',
            '#EA7D1F',
            '#EB3021',
            '#D23290',
            '#9534C7',
            '#3E30C7',
            '#1472C7',
            '#07A6C7',
            '#00C31A',
            '#B1D41A',
          ];

        return {
            WHITE,
            colors
        }
    }
    
    export default useColors;