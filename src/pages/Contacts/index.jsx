const Contacts = () => {
    return ( 
            <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Kyiv, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Phone / Viber / Telegram</h2>
                        <p><a href="tel:+380979707241">+38 (097) 970-72-41</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:danyliuk.vitalii@gmail.com">Danyliuk.Vitalii@gmail.com</a></p>
                    </li>
                </ul>
        </div>
    </main>
     );
}
 
export default Contacts;