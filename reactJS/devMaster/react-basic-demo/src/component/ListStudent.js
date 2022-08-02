import React from "react";
import { Component } from "react";
import Student from "./Student";
class ListStudent extends Component {
    handleClickViewEdit = (toggle,actionName,selectStudent)=>{
        this.props.clickViewEdit(toggle,actionName,selectStudent);
    }
    render() {
        let {students} = this.props;   
        let elementStudent = students.map((st,index)=>{
            return <Student key={index} student = {st} index={index} clickViewEdit={this.handleClickViewEdit}/>
        })     
        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Student Start */}
                            {elementStudent}
                            {/* Student End */}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default ListStudent;