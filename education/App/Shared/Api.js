import { create } from "apisauce";
// 172.20.10.8
// 192.168.0.17
const api = create({
    baseURL: 'http://172.20.10.8:1337/api',
    headers: {
        'X-API-Key': 'ff0315f85ccd684a99e8aecd0df60053f557f5ef9142b6ccfba92514c9f0379323a46ce573930fd0ddb2a83fe81c61a9b492eef56a95259cee1f7f6091194a1a564523a7ebfc49ab496ffe7fe0c48caba5a0e22455fd85df3d995f2e2417ef9e9cbeca968a57704d65a98a92781eb4611a03e8f164788fd8ae02fc9395e8d04b'
    },
})

const getVideo = () => api.get('/sliders?populate=*');
const getCourse = (type) => api.get(`/courses?filters[type][$eq]=${type}&populate=*`);

export default {
    getVideo,
    getCourse
}
