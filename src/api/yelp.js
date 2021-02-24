import axios from 'axios';
// we can use axios directly calling axios.get

//but we can also create a instance with preset options / for code reuse
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer cSwODGH1LwM0LPwFLEZIvDw2LK6O_E361Dy0p61WvH56Jj6ksMYoObI4XxOGqBzTCdJqyC_EWrqhC2E-30w7F4dwTDWa3AhpJmdgCeF5qFUJFid6azWWdvFLp6c2YHYx' 
    }
})