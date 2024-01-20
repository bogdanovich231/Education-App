import { create } from "apisauce";

const api = create({
    baseURL: 'http://172.20.10.8:1337/api',
    headers: {
        'X-API-Key': process.env.REACT_APP_API_KEY,
    },
})

const getVideo = () => api.get('/sliders?populate=*');
const getCourse = (type) => api.get(`/courses?filters[type][$eq]=${type}&populate[informationcourse][populate]=*&populate[image]=*&populate[Banner]=*`);
const setCourseProgress = (data) => api.post(`/course-progresses`, data);
const getCourseProgress = (uid, courseId) => api.get(`/course-progresses?filters[uid][$eq]=${uid}&filters[courseId][$eq]=${courseId}`);

export default {
    getVideo,
    getCourse,
    setCourseProgress,
    getCourseProgress
}
