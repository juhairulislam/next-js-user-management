"use client";
import React from 'react';
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

const NewUserPage = () => {

    const onSubmit = (e) =>{
        e.preventDefault() ;

        const formData = new FormData(event.target) 

        const newUsers = Object.fromEntries(formData.entries()) ;

        console.log('new User Data' , newUsers)
    }

    return (
        <div className='p-15'>
            <h2 className='text-center my-6 text-4xl font-bold'>Create a new user</h2>

            <div className='flex justify-center items-center gap-6'>

            <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
            Save changes
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>

            </div>

        </div>
    );
};

export default NewUserPage;