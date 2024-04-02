import CardDetailComponent from "@/component/CardDetailComponent";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: {
        id: string
    };
    searchParams: { [key: string]: string | string[] | undefined };
};

const ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

const getData = async (id: string) => {
    const res = await fetch(`${ENDPOINT}${id}`);
    const data = await res.json();
    console.log(data);
    return data;
};

export async function generateMetadata({ params, searchParams}:Props,parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id;


    const product = await fetch(`${ENDPOINT}${id}`).then((res) => res.json());



    return {
        title: product.title,
        description: product.description,
        openGraph: {
            images: product.image,
        },
    };
}

export default async function Detail(props: Props) {
    let data = await getData(props.params.id);

    return (
        <div className="">
            <CardDetailComponent
                name={data?.name || "NoTitle"}
                desc={data?.desc || "No Description"}
                image={
                    data?.image ||
                    "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
                }
            />
        </div>
    );
}
