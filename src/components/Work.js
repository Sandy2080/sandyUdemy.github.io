import React, { Component } from 'react'



const Project = ({ item }) => {
    return (<div className="col-md-4 gallery">
        <div class="card shadow">
            <div class="card-body text-center">
                <h3 class="card-title">{item.title}</h3>
                <p class="card-text">
             
                    <small>{item.stack}</small>
                </p>

                <a href={item.url} target="_blank" class="btn btn-light">Learn More...</a>
            </div>
        </div>
    </div>
    )
}
export default class Work extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = [
            { category: "iOS", title: "Links", desc: "Utility iOS App to save web links to read later", stack: "Swift, CoreData, App Extensions, AdMob, AccountKit", url: "https://apps.apple.com/app/id1229471501" },
            // { category: "Web", title: "Free Stocks Search", desc: "Single Page Application build with React and Firestore for data persistance", stack: "React.js, Firebase Cloudstore & Hosting", url: "https://reacts-eec3d.firebaseapp.com/" },
            { category: "Web", title: "React Sticky Notes", desc: "note taker application to stay on track with todos, built with React and Bootstrap", stack: "React.js 16.8, React Flux, localStorage", url: "https://stickies-app.firebaseapp.com/" },
            { category: "Web", title: "Sticky Notes", desc: "note taker application to stay on track with todos, built with Angular and Bootstrap", stack: "Angular, HTML5, CSS3, Javascript", url: "https://post-3f043.firebaseapp.com/posts" },
            { category: "Web", title: "Reminder App", desc: "Todo application built with purecss.io, bootstrap, angular.js, and localstorage for data persistence", stack: "Angular.js 1, HTML5, CSS3, Bootstrap, Pure.css, Javascript", url: "https://sludosky.github.io/projects/todoAngular/index.html" },
            { category: "iOS", title: "News-Guardian UK", desc: "Newsfeed Reader iOS app written in Swift with the official Guardian UK developer API", stack: "Swift, Realm Database", url: "https://github.com/SandyLudosky/NewsFeed-Guardian-API" },
            { category: "iOS", title: "Playlist Browser", desc: "First iOS project written in Objective-C to display songs and artists playlists", stack: "Obj-c", url: "https://github.com/SandyLudosky/PlaylistBrowser" },
            { category: "iOS", title: "Receipts Manager", desc: "iOS app written in Objective-C to track personal and business expenses.", stack: "Obj-c, Core Data", url: "https://github.com/SandyLudosky/ReceiptsManager-" },
            { category: "iOS", title: "FoodTracker", desc: "App to rate meals and track food intake.", stack: "Swift, Realm Database, Parse server", url: "https://github.com/SandyLudosky/FoodTracker" }
        ]


        return (<section id="works">
            <div className="container">
                <div className="row centered mt mb">
                    <h1>Recent Work</h1>
                    <hr />
                    {data.map(work => {
                        return <Project item={work} />
                    })}
                </div>
            </div>
        </section>)
    }
}