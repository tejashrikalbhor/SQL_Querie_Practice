	use my_sql_querry

	create table student(srno int(3)primary key auto_increment,
	name varchar(25),
	class int(3),
	t_id int(3),
	foreign key(t_id) references teacher(t_id)
	);
	create table teacher(t_id int(3)primary key ,
	name varchar(25),
	qualification varchar(25)
	);

	insert into teacher values(102,'prof tnya','ba');
	insert into student(name,class,t_id) values('tejashri',12,102),('preeti',12,101)
	select * from teacher
	select * from student