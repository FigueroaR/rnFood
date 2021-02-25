import axios from 'axios';
// we can use axios directly calling axios.get

//but we can also create a instance with preset options / for code reuse
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer y2R8oGXlK6JN-NXdk2XXyGCtVxQUQnF6sxIikZ2V7sCoqRPYKmEQNNO0rW7whntrgY5K_w6AKfihfxXYEY-k2rNIZ-oY2_nXSvtgXRtRIvhFSXw8DWvnrGOGgdo3YHYx' 
    }
})