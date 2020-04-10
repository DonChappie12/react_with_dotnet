using AutoMapper;
using Entities.DataTransferObjects;
using Entities.Models;
// using System.Linq;

namespace serverCode
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Owner, OwnerDto>();
            CreateMap<Account, AccountDto>();
            CreateMap<Owner, OwnerDto>();
        }
    }
}