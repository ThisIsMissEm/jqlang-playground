import { HttpType } from '@/workers/model';
import Editor from './Editor';
import HTTP from './HTTP';
import TabList from './TabList';

interface JSONEditorProps {
    json?: string;
    http?: HttpType;
    handleJSONChange: (value: string | undefined) => void;
    handleHTTPChange: (value: HttpType) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ json, http, handleJSONChange, handleHTTPChange }) => {
    return (
        <TabList tabs={[
            { label: "JSON", value: "editor", active: !!json, content: <Editor handleChange={handleJSONChange} value={json} language="json" readOnly={false} /> },
            { label: "HTTP", value: "http", active: !!http, content: <HTTP handleHttp={handleHTTPChange} value={http} /> },
        ]} />
    )
}

export default JSONEditor;
