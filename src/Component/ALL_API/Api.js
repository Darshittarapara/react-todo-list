const baseUrl = 'https://akashsir.in/myapi/crud/';
 class All_Api_Class { 
    getList() {
        return baseUrl + 'todo-list-api.php';
    }

    addList() {
        return baseUrl + 'todo-add-api.php'
    }

    deleteList() {
        return baseUrl + 'todo-delete-api.php';
    }
};


export  const allApiObject =new All_Api_Class();