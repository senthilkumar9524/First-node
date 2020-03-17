
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { AdminService, SharedService } from 'services/app';
import { untilDestroyed } from 'ngx-take-until-destroy';
export interface Admin_Dialog_Data { }
import Swal from 'sweetalert2';
import { TokenService } from 'app/services';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users: any;
  pageNo: number;
  admin_scroll: any;
  searchValue = "";
  role_permission: any;

  displayedColumns: string[] = ['position', 'id', 'full_name', 'username', 'contact_no', 'role', 'status', 'action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public dialog: MatDialog, private admin: AdminService, private toast: ToastrService, private sharedService: SharedService, public token: TokenService) { }

  ngOnInit() {
    this.sharedService.setLoaderShownProperty(true);
    this.getUsers();
    this.role_permission = JSON.parse(localStorage.getItem('role_permissions')) ;
    console.log(this.role_permission);
    // if (this.role_permission.users) {
    //   if ((!this.role_permission.users.includes('PUT') && !this.role_permission.users.includes('DELETE'))) {
    //     this.displayedColumns = ['position', 'id', 'full_name', 'username', 'contact_no', 'role', 'status'];
    //   }
    // }
  } 
  openDialog(): void {
    const dialogRef = this.dialog.open(admin_dialog_box, {
      width: 'auto',
      data: { new: 'new' }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

  edit(user, id) {
    const dialogRef = this.dialog.open(admin_dialog_box, {
      width: 'auto',
      data: { edit_admin: user, admin_id: id }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

  reset_pw(user, id) {
    const dialogRef = this.dialog.open(admin_pw_reset, {
      width: 'auto',
      data: { edit_admin: user, admin_id: id }
    });
    dialogRef.afterClosed().
    

    @Component({
        selector: 'admin_dialog_box',
        templateUrl: 'admin_dialog_box.html',
      })
      
      export class admin_dialog_box {
      
        adminForm: FormGroup;
        value: any;
        editMode = false;
        hide = true;
        hide1 = true;
        roles: any;
        clicked = false;
      
        constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<admin_dialog_box>, @Inject(MAT_DIALOG_DATA) public data: Admin_Dialog_Data,
          private toast: ToastrService, private admin: AdminService) {
          this.value = this.data;
        }
      
        ngOnInit() {
          this.createAdminForm();
          this.getRoles();
        }
        createAdminForm() {
          if (this.value.new) {
            this.adminForm = this.fb.group({
              full_name: ['', Validators.required],
              username: ['', [Validators.required, Validators.email]],
              password: ['', Validators.required],
              password_confirmation: ['', Validators.required],
              designation: [''],
              role_id: ['', Validators.required],
              contact_no: ['', Validators.required]
            }, { validator: MustMatch('password', 'password_confirmation') });
          } else {
            this.editMode = true;
            this.adminForm = this.fb.group({
              full_name: [this.value.edit_admin.full_name, Validators.required],
              username: [this.value.edit_admin.username, [Validators.required, Validators.email]],
              designation: [this.value.edit_admin.designation],
              role_id: [this.value.edit_admin.role.id, Validators.required],
              contact_no: [this.value.edit_admin.contact_no, Validators.required]
            });
          }
        }
        getRoles() {
          this.admin.role_get().pipe(untilDestroyed(this)).subscribe(res => {
            console.log(res);
            this.roles = res;
          });
        }
        submit() {
          Object.keys(this.adminForm.controls).forEach((key) => {
            console.log(typeof(this.adminForm.get(key).value))
            if(typeof(this.adminForm.get(key).value) == 'string') {
            this.adminForm.get(key).setValue(this.adminForm.get(key).value.trim())
            }
          });
          let data = this.adminForm.value;
          console.log(data);
          data.distributor_id = localStorage.getItem('user_id');
          if (this.adminForm.invalid) {
            return;
          }
          this.clicked = true;
          if (this.value.new) {
            data.status = 'Active';
            this.admin.admin_create(data).pipe(untilDestroyed(this)).subscribe(res => {
              this.clicked = false;
              this.dialogRef.close();
              this.toast.success('Created Successfully');
            }, error => {
              this.clicked = false;
              
      this.toast.error(Object.keys(error.error) + ' ' + Object.values(error.error));
            });
          } else {
            this.admin.admin_put(data, this.value.admin_id).pipe(untilDestroyed(this)).subscribe(res => {
              this.clicked = false;
              this.dialogRef.close();
              this.toast.success('Updated Successfully');
            }, error => {
              this.clicked = false;
              this.toast.error(Object.keys(error.error) + ' ' + Object.values(error.error));
            });
          }
        }
      
        spaceNotallowed(event) {
          if (event.keyCode === 32) {
            return false;
          }
        }
      
        ngOnDestroy() { }
      }Z`