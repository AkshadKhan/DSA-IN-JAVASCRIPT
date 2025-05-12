/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let m = grid.length;
    let n = grid[0].length
    let perimeter = 0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==1){
                perimeter+=4;
                //uperimeterar
                if((i-1)>=0 && grid[i-1][j]==1) perimeter-=1;
                // neeche
                if((i+1)<m && grid[i+1][j]==1) perimeter-=1;
                // left 
                if((j-1)>=0 && grid[i][j-1]==1) perimeter-=1;
                // right
                if((j+1)<n && grid[i][j+1]==1) perimeter-=1;
            }
        }
    }
    return perimeter;
};