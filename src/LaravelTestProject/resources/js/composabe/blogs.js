import { ref } from "vue";
import axios from "axios";

axios.defaults.baseURL = "http://localhost/api/v1/";

export default function useBlogs() {
    const blogs = ref([]);
    const blog = ref({});
    const errors = ref({});

    const getBlogs = async () => {
        const response = await axios.get("blogs/");
        blogs.value = response.data.data;
    };
    const getBlog = async (id) => {
        const response = await axios.get("blogs/" + id);
        blog.value = response.data.data;
    };
    const storeBlog = async (data) => {
        try {
            await axios.post("blogs/", data);
            errors.value = {};
            console.log("Blog stored");
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
    const updateBlog = async (id, data) => {
        try {
            await axios.put("blogs/" + id, data);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    };
    const destroyBlog = async (id) => {
        await axios.delete("blogs/" + id);
        await getBlogs();
        await console.log(Blogs);
    };
    return {
        blog,
        blogs,
        getBlog,
        getBlogs,
        storeBlog,
        updateBlog,
        destroyBlog,
        errors,
    };
}