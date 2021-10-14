<template>
  <div class="container">
    <h2 class="text-center mt-5">My Vue Todo App</h2>

  <!-- Input -->

  <div class="d-flex">
   <input v-model="task" type ="text" placeholder="Enter task" class="form-control"/>
   <button @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
  </div>

  <!-- Table -->

  <table class="table table-bordered mt-5">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col" >Status</th>
      <th scope="col" class="text-center">edit</th>
      <th scope="col" class="text-center">delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task,index) in tasks" :key ='index'>
      <td> <span :class="{'finished': task.status ==='Finished'}">{{task.name}}</span></td>
      <td style="width:150px">
        <span @click="changeStatus(index)"  class="pointer" 
        :class="{'text-danger':task.status==='To-do',
                  'text-warning':task.status==='In-progress',
                  'text-success':task.status==='Finished'
                }"
        >{{task.status}}</span>
      </td>
      <td>
        <div @click="editTask(index)" class="text-center ">
          <span  class="pointer fa fa-pen"></span>
        </div>
      </td>
      <td>
        <div @click="deleteTask(index)" class="text-center ">
          <span  class="pointer fa fa-trash "></span>
        </div>
      </td>
    </tr>
  </tbody>
</table>

  </div>

 

</template>

<script>
export default {
  name: 'TodoApp',
  props: {
    msg: String
  },

  data (){
    return {  
                task : "",
                editStatus : null,
                availableStatuses : ['To-do','In-progress','Finished'],
                tasks : [
                  {
                    name : 'Go to store',
                    status : 'To-do'
                  },
                  {
                    name : 'Complete Sprint task',
                    status : 'In-progress'
                  }
                ]
            }
          },

    methods : {
      submitTask (){
        if (this.editStatus===null)
        {
        if(this.task.length===0) return;
        this.tasks.push ({
          name:this.task,
          status : 'To-do'
        }
        );
        this.task = '';

        }
        else {
          this.tasks[this.editStatus].name=this.task;
          this.task = '';
          this.editStatus=null;
        }

      },
      deleteTask(index){
        this.tasks.splice(index,1);
      },
      editTask(index){
        this.task=this.tasks[index].name;
        this.editStatus=index;
      },
      changeStatus(index){
        let presIndex = this.availableStatuses.indexOf(this.tasks[index].status);
        if(++presIndex > 2) presIndex = 0;
        this.tasks[index].status=this.availableStatuses[presIndex];

      }
    }
};
</script>

<style scoped>
.pointer{
  cursor: pointer;
}
.finished{
  text-decoration: line-through;
}
</style>