function success_response(msg = false, data = false) {
    if (msg && data) {
        return {
            status: "success",
            data: data,
            message: msg
        };
    } else if (data) {
        return {status: "success", message: msg};
    } else if (msg){
        return {
            status: "success",
            message: msg
        };
    }
}

function error_response(msg) {
    return {status: "error", message: msg};
}

export {success_response, error_response};