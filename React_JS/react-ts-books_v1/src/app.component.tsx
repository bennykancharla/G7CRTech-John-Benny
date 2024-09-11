import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './components/navbar.component';
import { AuthorManageScreen } from './screens/author-manage.screen';
import { Footer } from './components/footer.component';
import { BookManageScreen } from './screens/book-manage.screen';

export class App extends React.Component {

    state = {
        screen: "books",
        formScreen: null
    }

    onClickScreen = (id: string,formScreen?:string ) => {
        this.setState({ screen: id, formScreen });
    }



    render = () => {
        const { screen,formScreen } = this.state
        return (
            <div>
                <NavBar title="World of Books" onClickScreen={this.onClickScreen} />
                <div className='screen'>
                    {   
                     screen ==="books"? <BookManageScreen showAddBookScreen={formScreen} /> : <AuthorManageScreen showAddAuthorScreen = {formScreen} />
                    }
                </div>
                <Footer>
                    &copy; <a href='https://www.conceptarchitect.in'>Concept Architect</a>
                </Footer>
            </div>
        )
    }
}