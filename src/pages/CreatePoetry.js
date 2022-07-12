import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase-config';

const CreatePoetry = ({isAuth}) => {
    const [title, setTitle] = useState("")
    // const [creator, setCreator] = useState("")
    const [contentPoetry, setContentPoetry] = useState("")

    const poetrycollectionref = collection(db, "poetrys")
    const navigasi = useNavigate();

    const storePoetry = async () => {
        await addDoc(poetrycollectionref, {
            title,
            contentPoetry,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            },
        })
        navigasi('/')
    }

    useEffect(() => {
        if(!isAuth) {
            navigasi('/login')
        }

    }, [])
    


    return ( 
        <div>
                <Container>
                <h1>Create Poetry</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" onChange={(event) => {setTitle(event.target.value)}}/>
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name Or Creator</Form.Label>
                        <Form.Control type="text" placeholder="Your Is Creator :)" onChange={(event) => {setCreator(event.target.value)}} />
                    </Form.Group> */}

                    <FloatingLabel controlId="floatingTextarea2" 
                    name="contentPoetry" label="Comments">
                        <Form.Control
                        as="textarea"
                        onChange={(event) => { setContentPoetry(event.target.value)}}
                        placeholder="Fill your poetry here"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                    <Button onClick={storePoetry}>
                        Submit
                    </Button>
                </Form>
                </Container>
        </div>
     );
}
 
export default CreatePoetry;