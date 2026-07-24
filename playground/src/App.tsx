import { useState } from "react";
import { ToolverseProvider } from "toolverse";
import {
  Button, IndigoGradientButton, PillButton, GlowButton,
  Card, CardHeader, CardBody, CardFooter,
  Alert, Badge, Input, Textarea,
  Avatar, AvatarGroup, Tooltip, Progress, CircularProgress,
  Divider, Spinner, Skeleton, DotsLoader, Tag, Navbar, Hero,
  Code, InlineCode, Tabs, Breadcrumb, Modal, Drawer,
  EmptyState, ErrorState, SuccessState,
  Heart, Star, Home, Search, Bell, Plus, Github, Twitter,
} from "toolverse";

type TabId = "buttons" | "cards" | "alerts" | "inputs" | "avatars" | "icons" | "overlays" | "states";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("buttons");
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ToolverseProvider theme={{ colors: { primary: "#6366f1" } }}>
      <div className="app">
        <div className="header">
          <h1>🛡️ Toolverse Playground</h1>
          <p>Live preview of all 17 handcrafted components — change source in /src and refresh</p>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {(Object.keys(TAB_LABELS) as TabId[]).map((id) => (
            <button
              key={id}
              className={`tab ${activeTab === id ? "active" : ""}`}
              onClick={() => setActiveTab(id)}
            >
              {TAB_LABELS[id]}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "buttons" && (
          <div className="section">
            <h2>Buttons</h2>
            <h3>Variants</h3>
            <div className="row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <h3>Sizes</h3>
            <div className="row">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
            <h3>States</h3>
            <div className="row">
              <Button gradient>Gradient</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button fullWidth={false}>
                <Plus size={16} /> With Icon
              </Button>
            </div>
            <h3>Pre-built variants</h3>
            <div className="row">
              <IndigoGradientButton>Indigo Gradient</IndigoGradientButton>
              <PillButton>Pill</PillButton>
              <GlowButton>Glow</GlowButton>
            </div>
          </div>
        )}

        {activeTab === "cards" && (
          <div className="section">
            <h2>Cards</h2>
            <div className="grid">
              <Card hover padding="lg">
                <CardHeader>Basic Card</CardHeader>
                <CardBody>This card has hover effect.</CardBody>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>
              <Card glow padding="lg">
                <CardHeader>Glow Card</CardHeader>
                <CardBody>This card has a glow shadow.</CardBody>
              </Card>
              <Card padding="lg">
                <CardHeader>Static Card</CardHeader>
                <CardBody>Just a simple card.</CardBody>
                <CardFooter>
                  <Button size="sm" variant="ghost">Cancel</Button>
                  <Button size="sm" variant="primary">Save</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "alerts" && (
          <div className="section">
            <h2>Alerts</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Alert variant="info" title="Information">This is an informational message.</Alert>
              <Alert variant="success" title="Success!">Your changes have been saved.</Alert>
              <Alert variant="warning" title="Warning">Please review before continuing.</Alert>
              <Alert variant="danger" title="Error">Something went wrong.</Alert>
            </div>
          </div>
        )}

        {activeTab === "inputs" && (
          <div className="section">
            <h2>Inputs</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
              <Input label="Email" placeholder="you@example.com" hint="We'll never share your email." />
              <Input label="Password" type="password" placeholder="••••••••" error="Password too short" />
              <Textarea label="Message" placeholder="Type your message..." rows={4} />
            </div>
          </div>
        )}

        {activeTab === "avatars" && (
          <div className="section">
            <h2>Avatars</h2>
            <h3>Sizes</h3>
            <div className="row">
              <Avatar name="John Doe" size="xs" />
              <Avatar name="John Doe" size="sm" />
              <Avatar name="John Doe" size="md" />
              <Avatar name="John Doe" size="lg" />
              <Avatar name="John Doe" size="xl" />
            </div>
            <h3>Status & Ring</h3>
            <div className="row">
              <Avatar name="Online User" status="online" ring />
              <Avatar name="Away User" status="away" ring />
              <Avatar name="Busy User" status="busy" ring />
              <Avatar name="Offline User" status="offline" />
            </div>
            <h3>Avatar Group</h3>
            <AvatarGroup max={3} size="md">
              <Avatar name="Alice" />
              <Avatar name="Bob" />
              <Avatar name="Charlie" />
              <Avatar name="Dave" />
              <Avatar name="Eve" />
            </AvatarGroup>
          </div>
        )}

        {activeTab === "icons" && (
          <div className="section">
            <h2>Icons (7 variants)</h2>
            <h3>Line (default)</h3>
            <div className="row">
              <Heart size={24} /> <Star size={24} /> <Home size={24} /> <Search size={24} />
              <Bell size={24} /> <Plus size={24} /> <Github size={24} /> <Twitter size={24} />
            </div>
            <h3>Solid</h3>
            <div className="row">
              <Heart size={24} variant="solid" /> <Star size={24} variant="solid" />
              <Home size={24} variant="solid" /> <Bell size={24} variant="solid" />
            </div>
            <h3>Duotone</h3>
            <div className="row">
              <Heart size={24} variant="duotone" /> <Star size={24} variant="duotone" />
              <Home size={24} variant="duotone" /> <Bell size={24} variant="duotone" />
            </div>
            <h3>Aurora (animated gradient)</h3>
            <div className="row">
              <Heart size={32} variant="aurora" /> <Star size={32} variant="aurora" />
              <Home size={32} variant="aurora" /> <Bell size={32} variant="aurora" />
            </div>
            <h3>Neon (glow)</h3>
            <div className="row">
              <Heart size={24} variant="neon" color="#22d3ee" />
              <Star size={24} variant="neon" color="#22d3ee" />
              <Home size={24} variant="neon" color="#22d3ee" />
            </div>
            <h3>Glass (frosted)</h3>
            <div className="row" style={{ background: "#1e293b", padding: 12, borderRadius: 8 }}>
              <Heart size={24} variant="glass" color="#ffffff" />
              <Star size={24} variant="glass" color="#ffffff" />
              <Home size={24} variant="glass" color="#ffffff" />
            </div>
            <h3>Crystal 3D (depth)</h3>
            <div className="row">
              <Heart size={32} variant="crystal3d" color="#a855f7" />
              <Star size={32} variant="crystal3d" color="#a855f7" />
              <Home size={32} variant="crystal3d" color="#a855f7" />
            </div>
          </div>
        )}

        {activeTab === "overlays" && (
          <div className="section">
            <h2>Overlays</h2>
            <h3>Modal</h3>
            <div className="row">
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
            </div>
            <h3>Tooltip</h3>
            <div className="row">
              <Tooltip content="Tooltip on top" position="top">
                <Button variant="outline">Hover (top)</Button>
              </Tooltip>
              <Tooltip content="Tooltip on right" position="right">
                <Button variant="outline">Hover (right)</Button>
              </Tooltip>
              <Tooltip content="Tooltip on bottom" position="bottom">
                <Button variant="outline">Hover (bottom)</Button>
              </Tooltip>
              <Tooltip content="Tooltip on left" position="left">
                <Button variant="outline">Hover (left)</Button>
              </Tooltip>
            </div>
            <h3>Other UI</h3>
            <div className="row">
              <Tag variant="primary" removable>React</Tag>
              <Tag variant="success">Active</Tag>
              <Tag variant="warning">Pending</Tag>
              <Tag variant="danger">Removed</Tag>
            </div>
            <div className="row">
              <Badge variant="primary" dot>New</Badge>
              <Badge variant="success">Active</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="danger">Failed</Badge>
            </div>
          </div>
        )}

        {activeTab === "states" && (
          <div className="section">
            <h2>States</h2>
            <div className="grid">
              <EmptyState
                title="No items yet"
                description="Add your first item to get started"
                action={<Button size="sm">Add item</Button>}
              />
              <ErrorState
                title="Something went wrong"
                description="Please try again later"
              />
              <SuccessState
                title="Payment successful!"
                description="Your order has been confirmed"
              />
            </div>
            <h3>Loaders</h3>
            <div className="row">
              <Spinner size={32} />
              <DotsLoader />
              <div style={{ width: 200 }}>
                <Skeleton height={14} count={3} />
              </div>
            </div>
            <h3>Progress</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <div style={{ marginBottom: 4 }}>Primary (75%)</div>
                <Progress value={75} variant="primary" striped animated showLabel />
              </div>
              <div>
                <div style={{ marginBottom: 4 }}>Success (50%)</div>
                <Progress value={50} variant="success" />
              </div>
              <div className="row" style={{ justifyContent: "center", gap: 32 }}>
                <CircularProgress value={75} size={80} showLabel />
                <CircularProgress value={50} size={80} variant="success" showLabel />
                <CircularProgress value={25} size={80} variant="warning" showLabel />
              </div>
            </div>
          </div>
        )}

        {/* Code & Navigation examples always visible */}
        <div className="section">
          <h2>Code Block & Navigation</h2>
          <Code
            code={`import { Button, Card } from "toolverse";

<Card hover>
  <Button variant="primary">Click Me</Button>
</Card>`}
            language="tsx"
            filename="example.tsx"
            showLineNumbers
          />
          <p style={{ marginTop: 16 }}>
            Use <InlineCode>npm install</InlineCode> to install.
          </p>
          <Divider label="OR" />
          <Tabs
            items={[
              { id: "tab1", label: "Tab 1", content: <p>Content for tab 1</p> },
              { id: "tab2", label: "Tab 2", content: <p>Content for tab 2</p> },
            ]}
            variant="underline"
          />
          <div style={{ marginTop: 16 }}>
            <Breadcrumb
              items={[
                { label: "Home", href: "#" },
                { label: "Products", href: "#" },
                { label: "Current" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Confirm Action"
        size="sm"
        footer={
          <>
            <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>Confirm</Button>
          </>
        }
      >
        Are you sure you want to proceed with this action?
      </Modal>

      {/* Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        side="right"
        title="Settings"
        width={360}
      >
        <p>Drawer content goes here.</p>
        <div style={{ marginTop: 16 }}>
          <Input label="Username" placeholder="john_doe" />
        </div>
      </Drawer>
    </ToolverseProvider>
  );
}

const TAB_LABELS: Record<TabId, string> = {
  buttons: "Buttons",
  cards: "Cards",
  alerts: "Alerts",
  inputs: "Inputs",
  avatars: "Avatars",
  icons: "Icons",
  overlays: "Overlays",
  states: "States",
};
