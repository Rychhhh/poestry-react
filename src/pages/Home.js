import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase-config';

const Home = ({isAuth}) => {

    const navigasi = useNavigate();
    const [poetryList, setPoetryList] = useState([])
    const poetrycollectionref = collection(db, "poetrys")

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(poetrycollectionref);
            setPoetryList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getData();
    })

    const deletePoetry = async (id) => {
        const poetryPost = doc(db, 'poetrys', id);
        await deleteDoc(poetryPost)
    }

    useEffect(() => {
        if(!isAuth) {
            navigasi('/login')
        }

    }, [])

    return ( 
        <div>
            <Container className="my-5">

            <h1>Home</h1>

                {poetryList.map((poe) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{poe.title}</Card.Title>
                            <Card.Text>
                            {poe.contentPoetry}
                            </Card.Text>
                            {isAuth && poe.author.id == auth.currentUser.uid && (
                                <button className="btn-danger mr-2" onClick={()=> {deletePoetry(poe.id)}}>
                                    {" "} 
                                    &#128465;
                                </button>
                            )}
                            <Card.Link href="#">{poe.author.name}</Card.Link>
                        </Card.Body>
                    </Card>
                    )
                }
                )}
                
            </Container>
           
        </div>
     );
}
 
export default Home;