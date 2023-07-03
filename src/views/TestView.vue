<template>
    <mainlayout>
    <div>
        <div class="row mt-2">
            <div class="col-6 text-start">
                <h5> All Person Testing Project</h5>
            </div>
            <div class="col-6 text-end">
                <button v-on:click="excel_export()">Export</button>
                <button v-on:click="excel_import()">Import</button>
            </div>
        </div>
        <hr>
        <div class="row table-responsive mt-3">
            <div class="col-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Register No</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, index) in person" :key="i.id">
                            <td>{{ index }}</td>
                            <td>{{ i.reg_no }}</td>
                            <td>{{ i.name }}</td>
                            <td>{{ i.dob }}</td>
                            <td>{{ i.address }}</td>
                            <td>{{ i.phone }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </mainlayout>
</template>
<script>
    import mainlayout from '../components/MainLayout.vue'
    export default{
        components:{
            mainlayout
        },
        data(){
            return{
                person: []
            }
        },
        async mounted(){
            let url="http://127.0.0.1:8000/api/person/";
            await this.axios.get(url).then(response=>(this.person=response.data));
        },
        methods:{
            excel_export:function(){

            },
            excel_import:function(){
                
            }
        }
    }
</script>