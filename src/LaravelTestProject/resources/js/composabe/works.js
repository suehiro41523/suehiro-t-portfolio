import { ref } from "vue";
import axios from "axios";

axios.defaults.baseURL = "http://localhost/api/v1/";

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
    const updateWork = async (id) => {
        try {
            await axios.put("works/" + id, work.value);
            // await router.push({ name: "App" });
        } catch (error) {
            if (error.response && error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    };
    const destroyWork = async (id) => {
        const getWorkById = (id) => {
            return works._value.find((work) => work.id == id);
        };

        if (!window.confirm(getWorkById(id).name + " を本当に削除しますか？")) {
            return;
        }
        await axios.delete("works/" + id);
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
