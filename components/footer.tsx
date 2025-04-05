import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PARA</h3>
            <p className="text-sm text-muted-foreground">
              Enhance your mind, body, and spirit with our curated audio collection.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/meditations" className="text-sm text-muted-foreground hover:text-foreground">
                  Guided Meditations
                </Link>
              </li>
              <li>
                <Link href="/workouts" className="text-sm text-muted-foreground hover:text-foreground">
                  Workout Sessions
                </Link>
              </li>
              <li>
                <Link href="/talks" className="text-sm text-muted-foreground hover:text-foreground">
                  Knowledge Talks
                </Link>
              </li>
              <li>
                <Link href="/focus" className="text-sm text-muted-foreground hover:text-foreground">
                  Focus Sounds
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Subscribe</h4>
            <p className="text-sm text-muted-foreground mb-4">Get updates on new content and features.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 border rounded-l-md w-full text-sm bg-background" 
              />
              <button className="bg-primary text-primary-foreground px-3 py-2 rounded-r-md text-sm">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SoundMind. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

