import { ref } from "vue";
import axios from "axios";

axios.defaults.baseURL = "http://localhost/api/v1/";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post[
    ("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept")
];

export default function useWorks() {
    const works = ref([]);
    const work = ref({});
    const errors = ref({});

    const getWorks = async () => {
        const response = await axios.get("works/");
        works.value = response.data.data;
    };
    const getWork = async (id) => {
        const response = await axios.get("works/" + id);
        work.value = response.data.data;
    };
    const storeWork = async (data) => {
        try {
            await axios.post("works/", data);
            errors.value = {};
            console.log("work stored");
            return;
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
                console.log("error detected");
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    };
    const updateWork = async (id, data) => {
        try {
            await axios.put("works/" + id, data);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    };
    const destroyWork = async (id) => {
        await axios.delete("works/" + id);
        await getWorks();
        await console.log(works);
    };
    return {
        work,
        works,
        getWork,
        getWorks,
        storeWork,
        updateWork,
        destroyWork,
        errors,
    };
}
