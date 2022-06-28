// in src/posts.js
import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, Create, SimpleForm, ReferenceInput, SelectInput, TextInput} from 'react-admin';
import { ReferenceInput, SelectInput, TextInput, List } from 'react-admin';

//Mobile Version
// export const PostList = (props) => {
//   const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
//   return (
//       <List {...props}>
//           {isSmall ? (
//               <SimpleList
//                   primaryText={record => record.title}
//                   secondaryText={record => `${record.views} views`}
//                   tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
//               />
//           ) : (
//               <Datagrid>
//                   <TextField source="id" />
//                   <ReferenceField label="User" source="userId" reference="users">
//                       <TextField source="name" />
//                   </ReferenceField>
//                   <TextField source="title" />
//                   <TextField source="body" />
//                   <EditButton />
//               </Datagrid>
//           )}
//       </List>
//   );
// }

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
 };

 const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid>
+           <TextField source="id" />
            <ReferenceField source="userId" reference="users">
            </ReferenceField>
            <TextField source="name" />
            <TextField source="title" />
            <EditButton />
            </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);
export const PostCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Create>
    );