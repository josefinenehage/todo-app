var app = new Vue ({
    el: "#app", 
    data: {
        todoList: [
            "cook", "clean"
        ],
        message: ''
    },
    methods:{
        add(){
            this.todoList.push(this.message);
        }
    }
})
