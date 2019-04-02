var app = new Vue ({
    el: "#app", 
    data: {
        todoList: [
            "cook", "clean", "Code", "Add todo"
        ],
        message: '',
    },
    methods:{
        add(){
            if(this.message != ''){
            this.todoList.push(this.message);
            this.message= ''
        }
    
        },
        remove(index){
            this.todoList.splice(index, 1);
        }
    }
})
