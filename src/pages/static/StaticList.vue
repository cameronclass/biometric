<template>
  <div class="col-md-12">
    <div class="card p-4">


      <c-main-table/>

<!--      <ve-table-->
<!--          :row-style-option="table.rowStyleOption"-->
<!--          :columns="table.columns"-->
<!--          :table-data="table.tableData"-->
<!--      />-->

<!--      <div class="table-pagination">-->
<!--        <ve-pagination-->
<!--            :total="totalCount"-->
<!--            :page-index="pageIndex"-->
<!--            :page-size="pageSize"-->
<!--            @on-page-number-change="pageNumberChange"-->
<!--            @on-page-size-change="pageSizeChange"-->
<!--        />-->
<!--      </div>-->
    </div>

  </div>


</template>

<script>
import CMainTable from '@/components/c-main-table'
export default {
  components: { CMainTable },
  data: () => {
    return {
      table: {
        pageIndex: 1,
        pageSize: 10,
        rowStyleOption: {
          stripe: true,
        },
        columns: [
          { field: "name", key: "a", title: "Name", align: "center" },
          { field: "date", key: "b", title: "Date", align: "left" },
          { field: "hobby", key: "c", title: "Hobby", align: "right" },
          { field: "address", key: "d", title: "Address", align: "left" }
        ],
        tableData: [
          {
            name: "John",
            date:"1900-05-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Shanghai",
          },
          {
            name: "Dickerson",
            date:"1910-06-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Beijing",
          },
          {
            name: "Larsen",
            date:"2000-07-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Chongqing",
          },
          {
            name: "Geneva",
            date:"2010-08-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Xiamen",
          },
          {
            name: "Jami",
            date:"2020-09-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Shenzhen",
          },
        ],
      }
    }
  },
  computed: {
    totalCount() {
      return this.table.tableData.length;
    },
  },
  methods: {
    pageNumberChange(pageIndex) {
      this.pageIndex = pageIndex;
    },

    pageSizeChange(pageSize) {
      this.pageIndex = 1;
      this.pageSize = pageSize;
    },
  },
}
</script>
