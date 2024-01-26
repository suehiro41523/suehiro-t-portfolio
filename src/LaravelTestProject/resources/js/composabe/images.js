import { ref } from "vue";
import axios from "axios";

axios.defaults.baseURL = "http://localhost/api/v1/";

export default function useImages() {
    const images = ref([]);
    const image = ref({});
    const errors = ref({});

    const getImages = async () => {
        const response = await axios.get("images/");
        images.value = response.data;
    };
    const getWork = async (id) => {
        const response = await axios.get("works/" + id);
        image.value = response.data.data;
    };
    const storeImage = async (data) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            const formData = new FormData();
            // const blob = URL.createObjectURL(data);
            formData.append("image", data.value);
            formData.append("name", data.name);
            console.log(formData.get("image"));
            console.log(data);
            await axios.post("images/", formData, { config });
            // await axios.post("images/", data);
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
            await axios.put("works/" + id, image.value);
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
        image,
        images,
        getWork,
        getImages,
        storeImage,
        updateWork,
        destroyWork,
        errors,
    };
}
