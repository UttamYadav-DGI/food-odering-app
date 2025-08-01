const Footer=()=>{
    return (
        <>
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} Namaste React Food Delivery. All rights reserved.</p>
            <p>
                <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
            </p>
            <address>
                123 Food Street, React City, India<br />
                Contact: <a href="mailto:support@namastereact.com">support@namastereact.com</a>
            </address>
        </div>
        </>
    )
}

export default Footer;