import {createSelector} from "reselect"

export const selectCategoryAndBanner = state =>{
    // console.log(state.category.catItem)
        return state.category.catItem
}

export const selectCategory = createSelector(
    [selectCategoryAndBanner],item => {
        // console.log(item)
        if(item){
            // console.log("aaaa")
            function objSlice(obj, lastExclusive) {
                let filteredKeys = Object.keys(obj).slice(0, lastExclusive);
                let newObj = {};
                filteredKeys.forEach(function(key){
                    newObj[key] = obj[key];
                });
                return newObj;
            }
            // console.log(objSlice(item.data, 8))
            return  objSlice(item.data, 8);
        }
        else{
            // console.log("bbbb")
            return null
        }
    }
)

export const selectThreeBanner = createSelector(
    [selectCategoryAndBanner],item => {
        // console.log(item)
        if(item){
            // console.log("aaaa")
            function objSlice(obj, lastExclusive) {
                let filteredKeys = Object.keys(obj).slice(7, lastExclusive);
                let newObj = {};
                filteredKeys.forEach(function(key){
                    newObj[key] = obj[key];
                });
                return newObj;
            }
            // console.log(objSlice(item.data, 8))
            return  objSlice(item.data, 10);
        }
        else{
            // console.log("bbbb")
            return null
        }
    }
)

export const selectOneBanner = createSelector(
    [selectCategoryAndBanner],item => {
        // console.log(item)
        if(item){
            function objSlice(obj, lastExclusive) {
                let filteredKeys = Object.keys(obj).slice(10, lastExclusive);
                let newObj = {};
                filteredKeys.forEach(function(key){
                    newObj[key] = obj[key];
                });
                return newObj;
            }
            // console.log(objSlice(item.data, 8))
            return  objSlice(item.data, 12);
        }
        else{
            return null
        }
    }
)

export const selectCatList = state => (state.category.catList)


