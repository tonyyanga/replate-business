class ApiConstants {
  get cancellations() {
    return {
      create : (id, date) => `/api/cancellations`,
      destroy : (id) => `/api/cancellations/${id}`,
    }
  }

  get sessions() {
    return {
      signup : `/signup`,
      create : `/api/sessions`,
    }
  }

  get locations() {
    return {
      show: (id) => `/api/locations/${id}`,
      update   : (id) => `/api/locations/${id}`,
      create   : `/api/locations`,
      week     : (id, today) => `/api/locations/${id}/week/${today}`,
      getTasks : (id) => `/api/locations/get-tasks/${id}`,
      tasks  : (id) => `/api/locations/${id}/tasks`,
      charge : (id) => `/api/locations/${id}/charge`,
    }
  }

  get invoiced(){
    return {
      show: (id) => '/invoiced',
      create: (id) => '/invoiced'

    }
  }

  get pickups() {
    return {
      update  : (id) => `/api/pickups/${id}`,
      create  : `/api/pickups`,
    }
  }


	get recurrences() {
    return {
      update : (id) => `/api/recurrences/${id}`,
      create : `/api/recurrences`,
    }
  }

  get task() {
    return {
      update : (id) => `/api/tasks/${id}`,
      create : `/api/tasks`,
    }
  }

  get admin() {
    return {
      businessList    : `/api/businesses`,
      businessProfile : (id) => `/businesses/${id}`,
    }
  }

  get businesses() {
    return {
      show: (id) => `/api/businesses/${id}`,
      update : (id) => `/api/businesses/${id}`,
      charge : (id) => `/api/businesses/${id}/charge`,
    }
  }
}

const APIConstants = new ApiConstants();
