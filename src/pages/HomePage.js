import React from 'react';

const HomePage = () => {
    return (
        <div style={styles.container}>
            <h1>Главная страница</h1>
            <p>Это схематичное представление основной страницы. Здесь будут располагаться блоки, поиск, навигация и прочее.</p>
            {/* В дальнейшем сюда добавим компоненты, такие как Header, Sidebar, блоки и т.д. */}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center'
    }
};

export default HomePage;
