import React from "react";

import {Main, Form, List} from "../components";

const MainContainer = () => (
    <Main>
        <Main.Title>What do you want to do today?</Main.Title>
        <Form>
            <Form.Base>
                <Form.Input/>
                <Form.Button>Add</Form.Button>
            </Form.Base>
        </Form>
        <List>
            <List.Base>
                <List.Item>Wash dishes</List.Item>
                <List.Item>Wash dishes</List.Item>
                <List.Item>Wash dishes</List.Item>
            </List.Base>
        </List>
    </Main>
);

export default MainContainer;