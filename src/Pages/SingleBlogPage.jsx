import React from "react";
import Blogitem from "../Components/Blogitem";

const SingleBlogPage = () => {
  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-3 gap-4  p-2 relative">
        <div className="sm:col-span-2  ">
          <div className="p-3 rounded-sm shadow-sm mx-auto flex flex-col gap-5">
            <div className="bg-white w-full mx-auto overflow-hidden rounded-sm mt-2">
              <img
                src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full"
              />
            </div>
            <div className=" flex flex-col gap-3">
              <h1 className="text-3xl font-bold mt-2 text-start ">
                I Phone is Best phone in This World
              </h1>
              <p className="text-start sm:text-sm lg:text-lg" >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem excepturi modi neque nesciunt, sequi amet provident
                et iusto est natus nostrum quasi corrupti hic maxime corporis
                necessitatibus maiores voluptate cumque eos nihil. Vitae illo
                sit nam animi incidunt fugiat. Ipsam voluptatem dolore accusamus
                enim, dolorem suscipit omnis saepe id earum placeat impedit sit
                animi sed similique eius aspernatur. Vero, sapiente officia
                maiores eligendi magni rem veritatis libero debitis ut voluptas,
                repellendus animi ea pariatur aut nisi? Illum eaque rerum,
                dignissimos cupiditate illo unde aspernatur ex minima. Odio
                quisquam molestiae voluptates veniam eius dolorem asperiores
                architecto quos magnam aspernatur, dolore impedit sequi
                perspiciatis sint cum, itaque in qui dolorum vero veritatis
                amet, sunt atque ipsam dolor! Alias dolores suscipit, error illo
                repellat nostrum officiis incidunt cumque velit molestiae
                voluptatibus animi beatae maiores. Sed possimus maiores
                similique blanditiis explicabo molestias. Repellendus esse quod
                commodi et neque nemo dicta at, doloribus dolorem veritatis eius
                eveniet debitis itaque accusamus delectus minus reiciendis,
                dignissimos quaerat modi? Animi alias qui cumque magnam eveniet
                ex unde. Quia et commodi odit architecto atque est, voluptatem
                maxime sed corrupti consectetur optio aliquam ipsa amet?
                Repellat deserunt eveniet explicabo praesentium ea voluptate
                totam modi maxime voluptatibus nostrum impedit ipsa cumque ad
                cum veniam, mollitia omnis perspiciatis! Totam, reprehenderit
                praesentium! Incidunt consequuntur neque non. Officiis libero
                corrupti distinctio odit blanditiis sunt ipsam omnis autem
                dicta. Similique dolores sed eum explicabo ea.
              </p>
            </div>
          </div>
         
        </div>

        <div className="bg-yellow-400 mt-4 h-[800px] "></div>
      </div>

      <div className="p-3  bg-gray-200">
          <h1 className="text-2xl font-semibold ">Related Blogs</h1>
            <div className="mt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Blogitem/>
                <Blogitem/>
                <Blogitem/>
                <Blogitem/>
                <Blogitem/>
            </div>
          </div>
    </>
  );
};

export default SingleBlogPage;
