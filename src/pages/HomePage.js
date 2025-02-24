import React from 'react';

const HomePage = () => {
    console.log("HomePage рендерится!");
    return (
        <div style={styles.container}>
            <h1>Главная страница</h1>
            <p>Это схематичное представление основной страницы. Здесь будут располагаться блоки, поиск, навигация и прочее.</p>
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
